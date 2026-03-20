export const MATRIX_BG_TOGGLE_EVENT = "portfolio:matrix-bg-toggle";

export type MatrixBackgroundToggleDetail = {
  source: string;
  active: boolean;
};

export function dispatchMatrixBackgroundToggle(
  detail: MatrixBackgroundToggleDetail
) {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(
    new CustomEvent<MatrixBackgroundToggleDetail>(MATRIX_BG_TOGGLE_EVENT, {
      detail,
    })
  );
}
