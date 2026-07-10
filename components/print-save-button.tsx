'use client';

export function PrintSaveButton({ label = 'Print / Save PDF' }: { label?: string }) {
  return (
    <button
      type="button"
      className="secondaryButton printHide"
      aria-label="Print or save this page as PDF"
      onClick={() => window.print()}
    >
      {label}
    </button>
  );
}
