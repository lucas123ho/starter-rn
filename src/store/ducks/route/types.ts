export interface RouteState {
  loged?: boolean;
  termsAccepted?: boolean;
}

export interface RouteTypes {
  SET_ROUTE: string;
}

export interface RouteAction {
  type: string;
  payload: RouteState;
}
