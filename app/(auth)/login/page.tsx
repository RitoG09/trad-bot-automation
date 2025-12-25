import { LoginForm } from "@/app/features/auth/components/login-form";
import { requireUnauth } from "@/lib/auth-utils";

async function Page() {
  await requireUnauth();
  return <LoginForm />;
}

export default Page;
