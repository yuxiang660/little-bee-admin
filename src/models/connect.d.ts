import { AnyAction } from 'redux';
import { MenuDataItem } from '@ant-design/pro-layout';
import { RouterTypes } from 'umi';
import { GlobalModelState } from './global';
import { DefaultSettings as SettingModelState } from '../../config/defaultSettings';
import { UserModelState } from './user';
import { StateType } from './login';
import { RequestStateType } from './request';

export { GlobalModelState, SettingModelState, UserModelState };

// Loading state is handled by DVA framework, which represents active states of effect function.
// The boolean value indicates whether current effect is working, which can be used to render
// loading effect. For example, Login component monitors 'login/login' effect. If the effect
// returns true, it means "I'm logging, please wait". At most time, the value should be false,
// or the field may be undefined.
// 'effects' field represents active effect functions of models. 'models' field represents active
// models.
export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
    login?: boolean;
    request?: boolean;
    setting?: boolean;
    user?: boolean;
  };
}

export interface ConnectState {
  global: GlobalModelState;
  loading: Loading;
  settings: SettingModelState;
  user: UserModelState;
  login: StateType;
  request: RequestStateType;
}

export interface Route extends MenuDataItem {
  routes?: Route[];
}

/**
 * @type T: Params matched in dynamic routing
 */
export interface ConnectProps<T = {}> extends Partial<RouterTypes<Route, T>> {
  dispatch?: Dispatch<AnyAction>;
}
