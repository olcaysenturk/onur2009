export function formatCopyright(template: string) {
  return template.replace("{year}", String(new Date().getFullYear()));
}
