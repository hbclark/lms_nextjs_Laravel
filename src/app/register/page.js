import SignupForm from "@/components/SignupForm/SignupForm";
import Navbar from "@/components/Navbar/Navbar";

export default function signup() {
  return (
    <div className="mx-auto">
      <Navbar />
      <SignupForm />
    </div>
  );
}
