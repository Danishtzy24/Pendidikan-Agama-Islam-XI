export function $<T extends Element = HTMLElement>(selector: string, root: ParentNode = document): T {
 const element = root.querySelector<T>(selector);
 if (!element) throw new Error(`Element tidak ditemukan: ${selector}`);
 return element;
}
export function $$<T extends Element = HTMLElement>(selector: string, root: ParentNode = document): T[] { return Array.from(root.querySelectorAll<T>(selector)); }
export const esc = (value: unknown): string => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
