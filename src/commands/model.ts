import chalk from "chalk";
import { select } from "@inquirer/prompts";
import type { Command } from "commander";
import {
  DEFAULT_FLIXA_BASE_URL,
  fetchAvailableModels,
  resolveFlixaApiKey,
  type FlixaModelDefinition,
} from "../flixa/api.ts";
import { getPersistedModel, setPersistedModel } from "../config/store.ts";

type ModelCommandOptions = {
  baseUrl?: string;
};

export function registerModelCommand(program: Command): void {
  program
    .command("model")
    .description("Select or set the default Flixa model")
    .option(
      "--base-url <url>",
      "Override the Flixa API base URL",
      DEFAULT_FLIXA_BASE_URL,
    )
    .argument("[modelId]", "Model id to set directly")
    .action(async (modelId: string | undefined, options: ModelCommandOptions) => {
      const apiKey = resolveFlixaApiKey();
      if (!apiKey) {
        console.error(chalk.red("✗ Not logged in.") + " Run `flixa login` first.");
        process.exit(1);
      }

      try {
        const models = await fetchAvailableModels({
          apiKey,
          baseUrl: options.baseUrl,
        });
        if (models.length === 0) {
          console.error(chalk.red("✗ No models available for this account."));
          process.exit(1);
        }

        const selectedModel = modelId?.trim()
          ? resolveRequestedModel(models, modelId.trim())
          : await promptForModelSelection(models);

        if (!selectedModel) {
          console.error(chalk.red(`✗ Model not found: ${modelId}`));
          process.exit(1);
        }

        setPersistedModel(selectedModel.id);
        console.log(
          chalk.green("✓ Default model set:") +
            ` ${selectedModel.label} ${chalk.dim(`(${selectedModel.id})`)}`,
        );
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error(chalk.red("✗ Model selection failed:") + ` ${message}`);
        process.exit(1);
      }
    });
}

async function promptForModelSelection(
  models: readonly FlixaModelDefinition[],
): Promise<FlixaModelDefinition> {
  const currentModel = getPersistedModel();

  const selectedId = await select({
    message: "Select the default model",
    choices: models.map((model) => ({
      name:
        model.id === currentModel
          ? `${model.label} (${model.tier}) [current]`
          : `${model.label} (${model.tier})`,
      value: model.id,
      description:
        model.description || [model.id, ...model.tags].filter(Boolean).join(" · "),
    })),
  });

  return models.find((model) => model.id === selectedId) ?? models[0];
}

function resolveRequestedModel(
  models: readonly FlixaModelDefinition[],
  modelId: string,
): FlixaModelDefinition | null {
  const exactMatch = models.find((model) => model.id === modelId);
  if (exactMatch) {
    return exactMatch;
  }

  const requestedSuffix = stripModelProvider(modelId);
  return (
    models.find(
      (model) => stripModelProvider(model.id) === requestedSuffix,
    ) ?? null
  );
}

function stripModelProvider(modelId: string): string {
  const slashIndex = modelId.indexOf("/");
  return slashIndex === -1 ? modelId : modelId.slice(slashIndex + 1);
}
