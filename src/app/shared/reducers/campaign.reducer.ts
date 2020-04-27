import { createReducer, ActionReducer, Action, on } from '@ngrx/store';
import { Campaign } from '../models/campaign.model';

export namespace ReducerCampaign {
    export interface State {
        readonly campaign: Campaign;
    }

    const initialState: State = {
        campaign: null,
    };

    export const campaignReducer: ActionReducer<State, Action> = createReducer(initialState,
        on(CampaignActions.Reset, (_state, _action): State => {
            return initialState;
        })
    )
}
