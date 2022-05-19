import { useRoute, useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';

export default function basicsUtil() {
  const route = useRoute();
  const router = useRouter();
  const msgOpen = (msg: string, msgType: any) => {
    ElMessage({
      message: msg,
      type: msgType
    });
  };
  return {
    route,
    router,
    msgOpen
  };
}
