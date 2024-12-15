import AuthForm from "@/components/AuthForm";

export default function SignIn() {
  return (
    <section className="bg-white rounded-xl w-full max-w-[630px] py-[90px] px-[57px]">
      <AuthForm type="sign-in" />
    </section>
  );
}
