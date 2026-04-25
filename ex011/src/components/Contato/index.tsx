import { Head } from "../Head";
import foto from "./../../image/contato.png";

export function Contato() {
  return (
    <section className={`grid grid-cols-2 gap-8` + ` animeLeft`}>
      <Head title="Raneki | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de empresora" className="w-[300px]" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className="p-0">
          <li className="text-xl font-sans mb-3 before:contet-[''] before:inline-block before:w-5 w- before:h-[0.125rem] before:bg-[#ddd] before:mr-[0.625rem]">
            kauaa422@gmail.com
          </li>
          <li className="text-xl font-sans mb-3 before:contet-[''] before:inline-block before:w-5 before:h-[0.125rem] before:bg-[#ddd] before:mr-[0.625rem]">
            99999-9999
          </li>
          <li className="text-xl font-sans mb-3 before:contet-[''] before:inline-block before:w-5 before:h-[0.125rem] before:bg-[#ddd] before:mr-[0.625rem]">
            Rua Ali Perto, 999
          </li>
        </ul>
      </div>
    </section>
  );
}
