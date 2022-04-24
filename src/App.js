import { useState } from "react"
import { toast } from "react-toastify";
export const App = () => {
  
  const Languages = [
    {
      id: "web",
      name: "Web Development"
    },
    {
      id: "express",
      name: "ExpressJS"
    },
    {
      id: "golang",
      name: "GoLang"
    },
    {
      id: "react",
      name: "ReactJS"
    },
    {
      id: "tailwind",
      name: "TailwindCSS"
    },
    {
      id: "security",
      name: "Web Security"
    },
    {
      id: "mobileapp",
      name: "Mobile App Development"
    }
    
  ]
  const formHandler = async (event) => {
    
    const elements = event.target.elements

    const isim = elements.isim.value
    const soyisim = elements.soyisim.value
    const email = elements.email.value
    const telefon = elements.telefon.value
    const adres = elements.adres.value
    const nowproject = elements.nowproject.value === "" ? "Boş" : elements.nowproject.value
    const anythingelse = elements.anythingelse.value === "" ? "Boş" : elements.anythingelse.value
    const langs = {"web": elements.web.value, "express": elements.express.value, "golang": elements.golang.value, "react": elements.react.value, "tailwind": elements.tailwind.value, "security": elements.security.value, "mobileapp": elements.mobileapp.value};
    const github = elements.github.value === "" ? "Boş" : elements.github.value
    const discord = elements.discord.value === "" ? "Boş" : elements.discord.value
    const lastproject = elements.lastproject.value === "" ? "Boş" : elements.lastproject.value

    const form = {data: {isim, soyisim, email, telefon, adres, nowproject, anythingelse, langs, github, discord, lastproject}}

    console.log(process.env.REACT_APP_SERVER)
    await fetch(process.env.REACT_APP_SERVER, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(form)})

    
  }

  return(
    <div className="selection:bg-[#2a324b] selection:text-[#5064a9] 2xl:pt-24 xl:pt-8 pt-12">
        <div className=" inset-x-0 py-3 px-4 flex lg:flex-row lg:space-x-16 space-y-10 items-center lg:space-y-0 flex-col justify-center bg-[#f7eee5]">
          <img onClick={() => window.open("https://nonofficialcompany.com", "_blank")} className="hover:cursor-pointer hover:bg-[#cac2bb] rounded-full h-16 flex items-center" id="arrow" src="/arrow.svg" alt="" style={{transform : "rotate(-90deg)"}}/>
          <img src="/logo.png" alt="logo" className=" lg:w-[300px] lg:h-[105px] w-[200px] h-[70px] " />
        </div>
        
        <div className=" lg:px-10 md:px-10 px-5 w-full flex flex-col space-y-12 items-center justify-center md:pt-20 pt-8 pb-20">
            <div className="flex flex-col space-y-4 text-center text-3xl">
              <div>
                NON Official Company işe alım formu
              </div>
              <div className="text-xl text-[#8da0ff]">
                *  ile işaretlenmiş alanları doldurmak zorunludur.
              </div>
            </div>
            <div className="">
              <form onSubmit={formHandler} className="flex space-y-8 lg:space-y-0 flex-col  xl:flex-row xl:space-x-8 xl:space-y-0 lg:space-y-8">
                <div className="flex flex-col space-y-8 md:space-y-0 lg:space-y-0 md:flex-row md:space-x-8 lg:flex-row lg:space-x-8" >
                  <div className="flex flex-col space-y-4 w-72 h-full">
                    <input
                    type="text"
                    name="isim"
                    placeholder="* İsminiz"
                    className="shadow-lg h-8 p-2 rounded-full focus:outline-none border-white border-2 focus:border-[#2a324b]"
                    required
                    />
                  
                    <input 
                    type="text"  
                    name="soyisim"
                    placeholder="* Soyisminiz" 
                    className="shadow-lg h-8 p-2 rounded-full focus:outline-none border-white border-2 focus:border-[#2a324b]"
                    required
                    />
                    
                    <input type="email"  
                    placeholder="* example@example.com" 
                    className="shadow-lg h-8 p-2 rounded-full focus:outline-none border-white border-2 focus:border-[#2a324b] "
                    name="email"
                    required
                    />
                    
                    <input 
                    type="tel" 
                    placeholder="* 5012345678" 
                    className="shadow-lg h-8 p-2 rounded-full focus:outline-none border-white border-2 focus:border-[#2a324b]"
                    pattern="[0-9]{10}"
                    required
                    name="telefon"
                    />
                    <textarea placeholder="* Adresiniz..."  className="shadow-xl h-full bg-[#8da0ff] placeholder-white text-white rounded-lg p-4 border-[#8da0ff] border-2 focus:outline-none focus:border-[#2a324b]"
                    rows="5" cols="10" name="adres" required style={{resize : "none",}}>
                    </textarea>
                  </div>
                  <div className="flex flex-col space-y-4 w-72">
                    <textarea name="nowproject" placeholder="Şu anda ilgilendiğin başka bir proje (Tübitak, olimpiyat vb.)"  className="shadow-xl bg-[#8da0ff] border-[#8da0ff] placeholder-white text-white h-full rounded-lg p-4 border-white border-2 focus:outline-none focus:border-[#2a324b]"
                    rows="5" cols="10" style={{resize : "none",}}>
                      
                    </textarea>
                    <textarea placeholder="Daha önce yaptığın bir projenin linki. Link yoksa ne olduğunu açıkla."  className="bg-[#8da0ff] placeholder-white text-white h-full rounded-lg p-4 border-[#8da0ff] border-2 focus:outline-none focus:border-[#2a324b]"
                    rows="5" name="lastproject" cols="10" style={{resize : "none",}} />
                  </div>
                </div>

                <div className="flex flex-col space-y-8 md:space-y-0 lg:space-y-0 md:flex-row md:space-x-8 lg:flex-row lg:space-x-8">
                  <div className="w-72 flex flex-col space-y-4 bg-white p-4 rounded-xl text-[#8da0ff] shadow-xl">
                    <div className="text-center space-y-4 flex flex-col">
                      <h2>Bildiklerini İşaretle</h2>
                      {Languages.map(lang =>(
                        <div className="space-x-2 flex flex-row">
                          <input id={lang.id} name={lang.id} className="cursor-pointer h-4 w-4 mt-1" type="checkbox"/>
                          <label  className="">{lang.name}</label>
                        </div>

                      ))}
                    </div>
                  </div>
                  <div className="w-72 flex flex-col space-y-4 bg-white p-2 rounded-lg text-[#8da0ff] shadow-xl">
                    <div className="flex flex-col space-y-2">
                      <div className="space-x-2 flex flex-row px-1">
                          <label for="check" className="">Github hesabım</label>
                      </div>
                      <input
                      type="text"
                      placeholder="https://github.com/example"
                      className="bg-[#8da0ff] placeholder-white text-white h-8 p-2 rounded-full focus:outline-none border-white border-2 focus:border-[#2a324b]"
                      name="github"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <div className="space-x-2 flex flex-row px-1">
                          <label for="check" className="">Discord</label>
                      </div>
                      <input
                      type="text"
                      placeholder="example#5098"
                      className="bg-[#8da0ff] h-8 p-2 placeholder-white text-white rounded-full focus:outline-none border-white border-2 focus:border-[#2a324b]"
                      name="discord"
                      />
                    </div>
                    <textarea name="anythingelse"  placeholder="Eklemek istediğin bir şey varsa yazabilirsin."  className="shadow-xl bg-[#8da0ff] placeholder-white text-white h-full rounded-lg p-4 border-[#8da0ff]  border-2 focus:outline-none focus:border-[#2a324b] "
                        rows="5" cols="10" style={{resize : "none",}}>
                    </textarea>
                    <button className="rounded-full text-white bg-[#8da0ff] py-3 border-2 border-[#8da0ff] hover:border-[#2a324b]">Gönder</button>
                  </div> 
                </div>
              </form> 
            </div>
        </div>
    </div>
  )

}

