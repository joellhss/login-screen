import { Check, EnvelopeSimple, LockKey, LockSimple, SignIn } from "phosphor-react";

export function Form() {
    return(
        <div className="flex flex-col gap-7 min-w-[375px] max-w-[572px] items-center">
            <div className="flex flex-col gap-1">
                <div className="flex items-center">
                    <SignIn size={24} className="text-form-primaryColor"/>
                    <h1 className="text-form-textTitle font-semibold text-2xl">Faça seu login</h1>
                </div>
                <p className="">Entre com suas informações de cadastro</p>
            </div>
            
                <form action="" className="flex flex-col w-[335px]">
                    <label htmlFor="email" className="font-medium mb-[5px]">Email</label>
                    <div className="relative flex items-center focus-within:text-form-primaryColor mb-5 transition-colors">
                        <EnvelopeSimple size={20} weight="regular" className="absolute ml-3"/>
                        <input className="pl-[37px] w-full py-[14px] rounded bg-transparent border-none ring-2 outline-none ring-form-textBase focus:ring-form-primaryColor font-normal transition-colors"
                        type="email"
                        id="email"
                        placeholder="Digite seu e-mail"/>
                    </div>

                    <label htmlFor="password" className="font-medium mb-[5px]">Senha</label>
                    <div className="relative flex items-center focus-within:text-form-primaryColor mb-5 transition-colors">
                        <LockSimple size={20} weight="regular" className="absolute ml-3"/>
                        <input
                        className="pl-[37px] w-full py-[14px] rounded bg-transparent border-none ring-2 outline-none ring-form-textBase focus:ring-form-primaryColor font-normal transition-colors"
                        type="password"
                        id="password"
                        placeholder="Digite sua senha"/>
                    </div>

                    <div className="flex items-center justify-between mb-5">
                        <label htmlFor="check" className="block relative pl-8 cursor-pointer group">
                            Lembre-me
                            <input
                            className="opacity-0 w-0 h-0 group-hover:bg-form-textBase peer transition-colors"
                            type="checkbox"
                            name="" id="check"
                            />
                            <span className="absolute top-0 left-0 w-5 h-5 rounded border border-form-textBase group-hover:bg-form-textBase peer-checked:bg-form-primaryColor peer-checked:border-form-primaryColor transition-colors">
                            </span>
                            <span className="absolute text-form-background invisible -top-0.5 -left-0.5 peer-checked:visible transition-colors">
                                <Check size={23} weight="bold" />
                            </span>
                        </label>
                        <a href="#" className="font-bold text-form-textBase hover:text-form-primaryColor transition-colors">Esqueci minha senha</a>
                    </div>

                    <a href="#" className="py-3 bg-form-textTitle hover:bg-form-primaryColor text-form-background flex items-center justify-center rounded font-semibold mb-3">ENTRAR</a>
                    <p className="text-center">Não tem uma conta?<a href="#" className="font-bold text-form-textTitle hover:text-form-primaryColor"> Registre-se</a></p>

                </form>
        </div>
    )
}