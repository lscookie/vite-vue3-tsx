import { computed, customRef, watch } from 'vue';
import { itemControllerType } from './itemObject';

export function debounceRef(model: any, colName: any, events: any, delay = 500) {
  let timeout: any;
  let _value = model[colName];
  events.run = () => {
    clearTimeout(timeout);
    model[colName] = _value;
  };
  events.clear = () => {
    clearTimeout(timeout);
  };
  return customRef((track, trigger) => {
    watch(
      () => model[colName],
      (v1) => {
        _value = v1;
        trigger();
      }
    );
    return {
      get() {
        track();
        return _value;
      },
      set(val) {
        _value = val;
        trigger();
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          model[colName] = _value;
        }, delay);
      }
    };
  });
}

export function rangeRef(model: any, arrColName: any) {
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        const tmp: any[] = [];
        arrColName.forEach((col: string) => {
          tmp.push(model[col]);
        });
        return tmp;
      },
      set(arrVal) {
        trigger();
        if (arrVal) {
          arrColName.forEach((col: string, i: number) => {
            if (i < arrVal.length) {
              model[col] = arrVal[i];
            } else {
              model[col] = '';
            }
          });
        } else {
          arrColName.forEach((col: string) => {
            model[col] = '';
          });
        }
      }
    };
  });
}

export function modelRef(model: any, colName: string) {
  return computed({
    get() {
      return model[colName];
    },
    set(val: any) {
      model[colName] = val;
    }
  });
}

export function debounceRef$1(props: any, emit: any, key: string, events: any, delay = 500) {
  let timeout: NodeJS.Timeout;
  let _value = props[key];
  events.run = () => {
    clearTimeout(timeout);
    emit(`update:${key.toString()}`, _value);
  };
  events.clear = () => {
    clearTimeout(timeout);
  };
  return customRef((track, trigger) => {
    watch(
      () => props[key],
      (v1) => {
        _value = v1;
        trigger();
      }
    );
    return {
      get() {
        track();
        return _value;
      },
      set(val) {
        _value = val;
        trigger();
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          emit(`update:${key.toString()}`, val);
        }, delay);
      }
    };
  });
}

export function emitRef(props: any, emit: any, key: any) {
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return props[key];
      },
      set(val) {
        trigger();
        emit(`update:${key.toString()}`, val);
      }
    };
  });
}

export function itemController(props: any, emit: any): itemControllerType {
  const { model, formItemMeta, keyName } = props;
  const ctlEvents = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    run: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    clear: () => {}
  };
  const run = () => {
    ctlEvents.run();
  };
  const clear = (e: any) => {
    if (e.key !== 'Backspace') {
      ctlEvents.clear();
    }
  };
  let value;
  if (model) {
    let isMoreColumn = false;
    let tmpArrayColName: Array<string> = [];
    if (typeof keyName === 'string') {
      tmpArrayColName = keyName.split('_');
      isMoreColumn = tmpArrayColName.length > 1;
    }
    if (isMoreColumn && tmpArrayColName) {
      value = rangeRef(model, tmpArrayColName);
    } else {
      if (formItemMeta.delay && formItemMeta.delay > 0) {
        value = debounceRef(model, keyName, ctlEvents, formItemMeta.delay);
      } else {
        value = modelRef(model, keyName);
      }
    }
  } else {
    if (formItemMeta.delay && formItemMeta.delay > 0) {
      value = debounceRef$1(props, emit, 'modelValue', ctlEvents, formItemMeta.delay);
    } else {
      value = emitRef(props, emit, 'modelValue');
    }
  }

  return {
    value,
    run,
    clear
  };
}
