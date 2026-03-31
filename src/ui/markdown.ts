import chalk from "chalk";

export function renderMarkdownToLines(text: string): string[] {
  const lines = text.split(/\r?\n/);
  const rendered: string[] = [];
  let inCodeBlock = false;

  for (const line of lines) {
    if (line.trim().startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      continue;
    }

    if (inCodeBlock) {
      rendered.push(chalk.cyan(line));
      continue;
    }

    const headingMatch = line.match(/^#{1,6}\s+(.*)$/);
    if (headingMatch) {
      rendered.push(chalk.bold(renderInlineMarkdown(headingMatch[1] ?? "")));
      continue;
    }

    const quoteMatch = line.match(/^>\s?(.*)$/);
    if (quoteMatch) {
      rendered.push(chalk.dim(`│ ${renderInlineMarkdown(quoteMatch[1] ?? "")}`));
      continue;
    }

    const bulletMatch = line.match(/^[-*+]\s+(.*)$/);
    if (bulletMatch) {
      rendered.push(`• ${renderInlineMarkdown(bulletMatch[1] ?? "")}`);
      continue;
    }

    const orderedMatch = line.match(/^(\d+)\.\s+(.*)$/);
    if (orderedMatch) {
      rendered.push(`${orderedMatch[1]}. ${renderInlineMarkdown(orderedMatch[2] ?? "")}`);
      continue;
    }

    if (/^---+$/.test(line.trim())) {
      rendered.push(chalk.dim("────────────────"));
      continue;
    }

    rendered.push(renderInlineMarkdown(line));
  }

  return rendered;
}

function renderInlineMarkdown(line: string): string {
  let output = line;
  output = output.replace(/`([^`]+)`/g, (_, code: string) => chalk.cyan(code));
  output = output.replace(/\*\*([^*]+)\*\*/g, (_, strong: string) => chalk.bold(strong));
  output = output.replace(/\*([^*]+)\*/g, (_, emphasis: string) => chalk.italic(emphasis));
  return output;
}
