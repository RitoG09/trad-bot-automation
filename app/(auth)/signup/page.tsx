import { SignupForm } from "@/app/features/auth/components/signup-form";
import { requireUnauth } from "@/lib/auth-utils";

async function Page() {
  await requireUnauth();
  return <SignupForm />;
}

export default Page;
