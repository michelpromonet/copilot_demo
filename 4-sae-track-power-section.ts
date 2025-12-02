import type { IAnimator, IAttribute, ISynopticContext } from "@ids/synoptic-lib";

export class SaeTrackPowerSection implements IAnimator {
    public attributes: string[] = [];

    private readonly _STATE_ATTR = ".powerState";

    private readonly _UNKNOWN_STATE_CSS_CLASS = "sae-track-power-section-unknown";
    private readonly _ON_STATE_CSS_CLASS = "sae-track-power-section-on";
    private readonly _OFF_STATE_CSS_CLASS = "sae-track-power-section-off";

    constructor() {
        this.attributes = [this._STATE_ATTR];
    }

    public dispose(): void {
    }

    public initialize(entity: SVGElement, entityId: string, context: ISynopticContext): void {
    }

    onSelectionChange?(_selected: boolean, _entityId: string): boolean {
        return false;
    }

    onMessage?(_message: any): void {
    }

    public process(entity: SVGElement, _entityId: string, data: Map<string, IAttribute>): void {
        const stateValue = data.get(this._STATE_ATTR);

        if (stateValue && typeof stateValue.value === "number") {
            if (stateValue !== undefined) {
                if (stateValue === 0) {
                    entity.classList.remove(this._UNKNOWN_STATE_CSS_CLASS, this._ON_STATE_CSS_CLASS);
                    entity.classList.add(this._OFF_STATE_CSS_CLASS);
                } else if (stateValue === 1) {
                    entity.classList.remove(this._UNKNOWN_STATE_CSS_CLASS, this._OFF_STATE_CSS_CLASS);
                    entity.classList.add(this._ON_STATE_CSS_CLASS);
                } else {
                    this._setUnknown(entity);
                }
            } else {
                this._setUnknown(entity);
            }
        } else {
            this._setUnknown(entity)
        }
    }

    public invalidate(entity: SVGElement, _entityId: string): void {
        this._setUnknown(entity);
    }

    private _setUnknown(entity: SVGElement): void {
        entity.classList.remove(this._ON_STATE_CSS_CLASS, this._OFF_STATE_CSS_CLASS);
        entity.classList.add(this._UNKNOWN_STATE_CSS_CLASS);
    }
}