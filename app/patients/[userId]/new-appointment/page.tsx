import Image from "next/image";

import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

const Appointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

  return (
    <div className="flex max-h-screen overflow-hidden">
      <Image
        src="/pics/medease-bg.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="absolute z-[-1] h-screen w-full max-w-full blur-md brightness-50"
      />
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          {/* <Image

            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
          /> */}
          <h1 className=" mb-2 w-fit text-5xl font-bold text-dark-700">
            MedEase
          </h1>

          <AppointmentForm
            patientId={patient?.$id}
            userId={userId}
            type="create"
          />

          <p className="copyright mt-10 py-12">© 2024 MedEase</p>
        </div>
      </section>

      {/* <Image
        src="/assets/pics/appointment-img.png"
        height={1500}
        width={1500}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      /> */}
    </div>
  );
};

export default Appointment;
