import { Form } from "./Form";
import { Logo } from "./Logo";

export function Page() {
    return(
        <div className="w-full h-full">
            <div className="flex justify-center relative lg:justify-between">
                <div className="flex flex-col">
                    <div className="m-10">
                       <a href="#">
                        <Logo/>
                       </a>
                    </div>
                    <div className="sm:bg-[#24221F] rounded-md py-5 sm:py-12 sm:px-20 lg:mx-[74px]">
                        <Form />
                    </div>
                </div>
                <div className="absolute invisible w-full lg:visible lg:relative">
                    <img className="w-full h-screen object-cover" src="https://lh3.googleusercontent.com/pw/AM-JKLX61oU7AEJgy9Vd2QILpyqYXxQzp8Ixuow2dS5i0XG2hUOyYyDROcnMo1LFofPoA20lSs-_TLBZze9o93KCTVz4NkbAO5A__4f7F2lEEjDGx-uWWL3IkXVADhIadfgMyXg_LF4ybOxCVXzfVrR74se5=w775-h968-no?authuser=0" alt="" />
                </div>
            </div>
        </div>
    )
}