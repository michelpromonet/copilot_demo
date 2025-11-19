import type { IAnimator, IAttribute, ISynopticContext } from "@ids/synoptic-lib";
import { ILogger, Logger } from "@ats/ui-services";


export class SaeTrackPowerSection implements IAnimator {
    public attributes: string[] = [];
    private readonly _LOGGER: ILogger = Logger.build("SaeTrackPowerSection");
    private _entity!: SVGElement;
    private _entityId!: string;

    private readonly _STATE_ATTR = ".powerState";

    private _stateValue?: number;

    private readonly _UNKNOWN_STATE_CSS_CLASS = "sae-track-power-section-unknown";
    private readonly _ON_STATE_CSS_CLASS = "sae-track-power-section-on";
    private readonly _OFF_STATE_CSS_CLASS = "sae-track-power-section-off";

    constructor() {
        this.attributes = [this._STATE_ATTR];
    }

    public dispose(): void {
        // NOTHING TO DISPOSE
    }

    public initialize(entity: SVGElement, entityId: string, context: ISynopticContext): void {
        this._entity = entity;
        this._entityId = entityId;
    }

    onSelectionChange?(_selected: boolean, _entityId: string): boolean {
        return false;
    }

    onMessage?(_message: any): void {
    }

    public process(entity: SVGElement, _entityId: string, data: Map<string, IAttribute>): void {
        if (this.receivedAllData(data)) {
            this._updateGraphic(entity);
        } else {
            this._setUnknown(entity)
        }
    }

    public invalidate(entity: SVGElement, _entityId: string): void {
        this._setUnknown(entity);
    }

    private receivedAllData(data: Map<string, IAttribute>): boolean {
        let result = false;
        const stateValue = data.get(this._STATE_ATTR);

        if (stateValue && typeof stateValue.value === "number") {
            this._stateValue = stateValue.value;
            result = true;
        }

        return result;
    }

    private _updateGraphic(entity: SVGElement) {
        if (this._stateValue !== undefined) {
            if (this._stateValue === 0) {
                entity.classList.remove(this._UNKNOWN_STATE_CSS_CLASS, this._ON_STATE_CSS_CLASS);
                entity.classList.add(this._OFF_STATE_CSS_CLASS);
            } else if (this._stateValue === 1) {
                entity.classList.remove(this._UNKNOWN_STATE_CSS_CLASS, this._OFF_STATE_CSS_CLASS);
                entity.classList.add(this._ON_STATE_CSS_CLASS);
            } else {
                this._setUnknown(entity);
            }
        } else {
            this._setUnknown(entity);
        }
    }


    private _setUnknown(entity: SVGElement): void {
        entity.classList.remove(this._ON_STATE_CSS_CLASS, this._OFF_STATE_CSS_CLASS);
        entity.classList.add(this._UNKNOWN_STATE_CSS_CLASS);
    }
}