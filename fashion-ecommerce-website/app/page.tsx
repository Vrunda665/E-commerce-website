import Image from "next/image"
import Link from "next/link"
import Header from "./components/Header"
import Footer from "./components/Footer"

const featuredProducts = [
  {
    id: 1,
    name: "Summer Dress",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    name: "Casual Shirt",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    name: "Denim Jeans",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 4,
    name: "Sneakers",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
]

const categories = [
  {
    id: 1,
    name: "Women's Fashion",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Men's Fashion",
    image:
      "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Collection 2025</h1>
                <p className="text-xl mb-6">Discover the latest trends in fashion</p>
                <Link
                  href="/products"
                  className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300"
                >
                  Shop Now
                </Link>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExIWFRUXFxUXGBgXFRUYGRcYFxUXFxcWFRcZHSggGB0lGxUVIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGjElICUtLS0vNS8tKy0yLS0tLS8rLS8tLS0tLS0vLS0tLS0tLS0tLS4tLS0tKy0tLy0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQIFAwQGB//EAEIQAAECAgQKCAUDAwQCAwAAAAEAAgMRITFhcQQFEkFRYqGi8PEGcoGRwcLh4hMiUrHRBzJCFSOCFEOSsjPSFiRT/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAMEAQIFBv/EADIRAAICAQMCAwYGAgMBAAAAAAABAgMRBBIhMUETIlEFMmGhseFCcZHB0fAUgTNS8SP/2gAMAwEAAhEDEQA/APZ9kt206Uc/ddYjinzWI49TqoA2+NqNs967RJHFHlsRxR5PFAPlfqpcrtW+1PjlrJceh1kAbJbt+maNkt206UcU5uujinzWIA5++6xG2e9aNCOO3T1UcUeWxAG2e9doknyv1b0uKPJ4p8ctZALldqo2S3b9M0cc9ZHFObr+CANktltqOfuusRxT5rEcevVQBtnvWjQjbPesGhHFHksRxR5LUA+XtvtRszXWJcctZPinzWoBbJbt+maOd2sjinz+COKfNYgDnfrXWI2z3rtEkcctVHFHkQBtnvWDQny9t9qXFHltRx6dZAPZLdsOlLZLdv0zT4p81qXFPn8EA0IQgFt8b0cvbcjbPessRy9nqgDi6wWJ7JaP49VGyVF2rbeoPOaqXbkz+80Ay7jRaLU+fqbVECy27WtuUud+t6IA2z05+sjb42GxG2e9+JI2z3rLEAcvbcjZ4WCxHL2eqeyW7ZagFslozdVB9fUWo2S3fzNYXPst9Z+CGG8GUOn6/c2qJiC/xvWKaFuokbn6GT4vGmwpiLx4XLEhMIxuZsA8DNcg912bqrXESWdZGRRpA0WW2qNzh6olWX2MvP3XqJdxptNqHH8y8/ootbZOdMtOtYsmSY751T/l1k+L7DYltnvfiSfK/VsvQC5e25GyWjN1UcrtT1Rslu/maAezwtCXP3Xo2S3bbUc/f6IA4pz2m1IO7Z1T/leouM6JTnT1rbFJo7Z70vtJAPtQmhAHFGfqo49OslxRm6tqOPUayATjz0WG1Jrey/N1tKlxT5rUcU5+v4IAHFlpsSyxVxPSLE+PQ2KD2ZxwbLFlGHnsKNFlKYmDWR5VkBnTXPRnsbasVjqtouUGAtqpFlYtFqrTlZXPL5i/l9jeO2Swups8enWRxTmsdaotcDVxb1kojqOO82qeLUuUavjqYor50CYlfwVABSWnhuMWQx8xpzDOblmdkK+rI4wlY+DbJUTEVCceTP8AFo1nAGwyu+62oeGmWYmkyEquSoXam6X/ABrH1LcNKl7xYl5UVqsw9uebb6u8LZBnSFyrXY358lhRUeiGkSmhRGSLCRStqFH05+Oxa6FPVqJ1Pyvj0NJQUupYbbs/VT4vsFqwYM+iWjvlqrNx6i1d6qxWRUkU5R2vA+PQ6yOKc3WS49TrLBhuEiGwvNMqgf5HMHKRvAjFyeEYsYYxZCFNLszc97tASxbhbojMpzZfNRKdI02Ccx2Kvxdi0xD8WNTlUgHPa7Q3QFegSqu9OqtIuTeX0LN0aq47I8y7v9kRDfWWe1tilxRn6qOKM3VsRxRm6vityqNCJIQC2S3bbUc7tb0QO6W7ejn7rkAbZ0361iNs978SRxfaLEbZ711yAOV+r6o5Xavqnyv1RasWEYQ1jcpxkBR7JZyhlJt4RMjTRLtyfzNa+E4VCYfmcGnROZFshSVQYdjl76GzY0VSPzdp/CrmMLjIAk2UqF3donSr9m5WbXj++p0DsdMnJjHOcTITIEzmOfarBz9Naq8W4B8P5nfvzD6fVbpKq3azwk0ve+n3ILqa5SSh7q7+v2G501wmPcal8RzczTIGwV9s7l3RXleMnSiGmunNXMzmJ0VTVShubcpPLJYRSWEb2DR6Zbfzp71YQsKdKQdSdLpCw0gW965z/Who7u7jMrDo5GZEw0wDEa/JaS6G0vaC4ZOXlPLcl4aaMmYBtlTcjBvoZlJLqdFg0d1GXorrrolyW+wvaQWkyztokdNxktRuN8Eih4gOhvLKT8F0NxAP8y1hnkzzykq7FmPWxIj8Hd8sVoym6Ht0t0HS2yemSdfZmmV1R1uC4SHiig525x+VnVNDwdwk5ssoAyOa4gVj7Uq3humAdIXMuq2PjoZJIQhQAMoiltBzT02qr/r0UGlrKM0nUHvrVoqHG0LJiE5nU/ni1XtHa4txyT6euucmprJZQukI/lD7jn0yI8VN8dmExGMFLR8zgaC91QHYJ9hK51WeKMX5Zy3ftBotI8F0oylJ4JLtPTTF2Lg6UvF/jYdCgXHw7NCxuiAEAkTNQnWbFsNhjj/rernCOB5pAw0V1Z9Filslu/maeyWywpbJbt960JEPsQkhAHFPnsRxbO3VRtnvWFHL23IA4o8tiOKPJ4o2eFgsRslu3XoAJ09uiVmsqHCcGiR35TvkYP2g1y0kaTarh753cUqKy689TNepdTbh19fQ0YOKoTc2UdLjPZUtqQaJNAFwAUnuksKoazVKpbK+v0+5JWp3PdY20CEIXELYLynHpHx4o1zZKkr1ZcN0zxI5pfhDGl7TIuaB8zaaxKsZ5q3pZpPD7mU8HCYW+ZDZ0Gs1SGc8aV2/RnEUNkP/AFEL5ouEw2xImU8As+IA8w4YyaGl1ZJnQKTJcRhQD2k1CudOakiWY0VLucVYxwR2BQBEjNLshmU0OpBlORlSJVdi6i4RqsSlyUELorHxeXubGywQQ0sAbktcW5RcCZzIaGyExIuVRjrDiXMe1rhHhyLYjJZJpnKI0mjsr0LqOkuPobmhkMzFHYBmXD4XjOn4Yh5RdVNxAEv5OAHzXTCbnJ5GyMY4PXujuM/jwmxKASMlwryXCgiefSDaFc4uf8pbT8riKdB+YdkjsXl/6fYx+HHfAc4yfSJ//o0ydLRNs/8AgF6XixsnRLXA5vpVLVxxAyuTfQhC5oBVmPGUNNpHeJ+Cs1oY6/8AGOsPsVNQ8WImoeLEVeBYMYjw0Xk6BnV/hmFNgtAAplJrfE2LUwCUGD8R1bqhp+keKp48YvcXONJ4kF3E/Dj8WbSreru59yPzfccWO5zsok5Vc9EqpaF2GBxstjXaQJ6LZa05ril1XR8/2W2F3dlGm9YpfJn2jWlXFrs8FlxT5rUhxPz+Ce3xtKQ75719ysHGBCJoQBtnvWWI5ez1T4oz9W1HHp1kAtkqLtW29Yoxl2ZtHass+DmsNq1YlJzi9ZiaTfAplSJkgBYojlFqtR4MM9+wqr3ywIlJCwYXhjIYm9wGjSbgKSvONuTz3OpGLflijOoRoga0uM6BUASTYAKSbAq1/SCCPrNzR4la39db8QPk7JDSA2icyaz2BTU1NzW5cEz0t2OImGNjiM9r/gsc1zQ6fxGuYxpyX5IMxNxmGUAGtW+Koz3QYZiZJe5oyi0zaTVMT00LmcbYwMZ7D8zYbXZRYDIvIILcp2YAics6yxMdxJSaGsuHZROgUK1fXGSSgiRaK6T6Y/2cd+oGE4GC4YPIGZERzP2EgyyGirKnWRR3rk+ieBNwjDYMN4Ja7LBkZEAQnkSNkgr/AKW4VDhMECG1rXPE3SAmGTlSdYg9gKX6bYtecKbGDf7TC4OcdJhuAY3SZumrdflgVb6XCajnPqXWF9C2ww5xjuyG1DJGUf8AKcti8+ZS9zp0k5IumvaOksVghnKcGtkb3HQF429rjEymyk109t1NazB5ya2RwkzdwGM9kTLaZOa/KzCkUidllpXt2IcKEQOcJU5DgM4DmjxmvEsCdN0qROgk0NFJ/c6RlWvT+iuKcJgCbgGtFI+cOBaRORp00g2qDVJSjjPIjFpHZqBccyo8F6Rh08tmQ0k5JBmS0SBLheRV9QV3BeHCbSCDnFRlR6LmzqlD3kZawZFp4wh5WQzMXTNwBJ2LcVfjlxDQRnm3sMie+Q2rfTLNqN68uSS6lfjHC/iOo/aKGizT2qOC4E99QkNJ8NKITWNpf8xzN/8AY+CcbD3uz5I0No2q/Oc5Py/r/B0oxcYqFa4RvsxfCb+90zaZbFZYKwhoDB8v7hKq+ZXMQYZe4NFbiB35yu1Y0NAAqEgNNFAPVSvSyk8ub/1wc/Wtwwm85HOikTnm+q2eZJpJtB3vxJI011ffq2KcuBn6viukcoEJoQC4ozdVHHr1kbJbttqOd2v6IBEcGo2m1YXtpz9tfas+2dN+tZcoRBOnb9XZmksrqayWUYIhWFSeaVFcDWXeLa8dFwi5RDZExYXhDYbC91QHfoAvK4ePFL3uiPNJPdoAuVt0kwzKcGD9ra7Xen5VIQtqIbVlnodDRshufV/QkDND30pKLlOX8Cc5QwmOGsL3GTWgkmwCahlLmem2MCGtgA0u+Z3VBoHaaexbQW54Ir5qqDkcvhmEujxHxHVuM7hmHYJBehYw6VRsDgw4QwAQnFoLBENVYyywAGcwaJgzXC4swUveyGK3ua3vIHivS+mUWEcPnEgsjCGxrcl7WkUgvzgyIywexX1WpI8nfe4S55zycYMYRo8QvjuyjL5pCWSZghoA0CVG2a1I8LLy2sd802mWaiik091qxYvwpohhocJ1uJaTlPIExIyFk6TR2rpGYN/9RsTJ/cZAyAoDy0DuAVZva8na8ONkFDPx+xz+DiO01TGeRFWhpFOxesfp9GdFwDJJM2PewZiAJFoI/wAql5xIaE4OFRIZnDe5h0tcWnvCjtjvRidOYbEzrY+LXP8A7ojOhn5XOEptqY75Wk/L87TV9K6zovCDIAaMrJynFuVOYDjlSM7SZHOJLy0YzjfyeXCcyDSHfNlScayCSc+c6V0kL9QItOVAYZ/SXNkdNOUtb05x2pFV6afY9HWljgf256HA/ceK5yH+oEAj5oUQXZB8R9lk/wDmuCRGlrviMBzlk7f4k6AqlNdlctzXBrGqaknh9RoWpgmNIMQ5LHgnRJw7pgLcAXQOsXfRzA6fikaQ205ybM3er4ji3R1VDB4Ia1rRUBLrSzWXrJy9nqrkI7Vg81qLnbY5fp+QpcDNY2xM8SzdVGyW7ZajZLd/M1sQAhPsQgFslsvRz91yOKfPYjjnqoA4vtFihGdIGmvbdcp8UeWxa+FuqH2q7FBqbPDqbN645lg11qY0wv4cMuz1C9ba5HHmMmxHyDhktoFNekrhU17pHW0tPiT56LqaDok61CaQIzAm5rj4KYY81Q3dsm/cro7WdqV1ceskY5HQpGGTmWdsCLoY28k/YJPwV38ooHVaPElZ2EEtfUu5Wx5Ma57jJrRMnwC88xphPxYpiESnLYJeC9Kw/E7YsMty3OziZEpiqgChec41wF0F+S4KauKRS1Wq8dYj0Re/ptgPxMPhTqYS8/4glu0Bb2N8L+LGjRcznOI6oobugLD+n7zDGExh/GA9oOhz3MYyXaSsUQSY7qn7K5D3Tz2olusOMZm03TJ4ltXpsCCP6RDsY13fEn4rzEvv7a5yXrOBy/pLAZCeDtIHYHKtZ0O3p35uDjspE0i0ICiLvcYKbVFOSGyfIFyYKiGlTyVg2WTPi2PkRWO0OHdOnZNeiAypXmhhr01xmGPFT2MeP8mg/eaZ5wO+DuGumJ1zHeNAT5e29V2Io+VBGlvynsqybZEKw441leTysnmLIbJuL7D4usNqQ7paf43o4p81qOKfP4LJoNCEIBbZ71h0I5e261G2e9YNCOXtvtQD2SousC0Yx+Y0SzSuW7Psln0WKvXN9pS8sY/3+8k9C5bBVmFYpbMuhtAJpLaADccx2XVqzmsmDtm4d65tLlvSj3LDltTZy8RpBIMwRWDQReFhiRmitwF5AV50l6O/6pzSXhoaCP2TJmZ1zFHqqmH+n0HPEcbmgfea7/gfEpf5C9CuiYzgCuKzvBWs/HsD653Nd+F0cPoNgor+Ie1o+zVtwui2CN/2Qes5x2EyWVR8TD1Hw+f2OJiY/h5mPNsgNs1W40lhTckQHuOYik2VBeqwcWwWfsgw23MbPvktgrdUxMf5M08pL5/yeQQcVxMFwYsiMc0xXMllCRcGZZdRWKXQ1X4dRCiHQx53Suy/UKLOLCbmDCe1zqf+oXGY1/8ABE6jvsVv2K6bcss4uGwyMpCQpnfKV/4K9GwF88EySZkQJA3Q1wGCQ5iINQkWuaWmj7dq7zKyIbW5y0NkBTS0CQ71RufQ9ZoIYjJ/D+SgDjoUlZuxVEH+2TcWlY3YK4VscL2la5No7X3NLJTks2Qn2LBvtNcmSjMraLQsL4KyCAK9KxTEy8CwZ2gOZ/xcWj/rtXmhmu76JR54HkmtsZ8rixp+7io5rlP4/say6rHr+x1vRmL8z26QHXSMpj/kui5+6+xcpiA/3m3O7KJz2LqufvusV2p+U43tCOLs+qX8D2z22nQltnvX6JI2z3rbET7Z712iSlKI0JTQgHxR5bUuPQayey7N1Uc/degEeJ+a1VrirEn832m1VxbTp7Nq5ftJe6/zLFD6iAW5ggrPYtYLWw/ChDFUyah+VS009lqeMk0q5WLZHuXJWH47dP3XMf1N86m9x/K2IWNh/JsrRTsXVv1Vqw64/nn/ANNY+zLF73yOhmoFV8HCGu/a7uMj3VqL2PzPPaSlPtCD4s8rKtulnB8cliVjJmVXObFzP2lcvjfpeyBEfBfEdlNocAwmsTrAOYq3C+ufuyRD4Vn/AFZS9I8N+JHe4UtmQLhQDsVFjr/wROqrCNjTAHftiObRP9ryNo8VRY4wyGYZbDih4JH8XAiThOYIqWzksdTMKZ7lmL6+hXQIP9gPmBIva6mVBziVcu2q5XmDY8aYrnFpokG0UAUCiZoNp0Fc+YpMBkJtLiSZCc5Ak1X00ZmlbGCMyWCmgkkSI/aaxLwoVNr1PSrlKK6YWTvcBiPitD4bHPEg6TTDc4AkgEsa7LAMjWMy2vhRBSYcRt8N4+4VP+nRiw4gi5HySiQ3GgAicxI55Oa0d/b3UXDojzJswNDZz7TWq8tylhLgilp3njoc58Br62B3YCoHE0M/7criR4rom4uin+J7ZKf9Mi/SO8LZziurEYVr8fzOTi9H4es3tmNq1z0eOaJO8S+y7uDief7zRobX3oiYjYKcsga2SR4KN6itPGSOdrjLEJZPPImIYmidxHjJWnRfBnsD8qokSvE5+CuY2CtBll5berkg30ku2dqkApk8lyne1mZZdH2/3hYHGyqVNlK6njt09Vc/0YhfM92gBthmZyP/ABV+5349LlbqXlOR7Qlm7Hol/Inu4HlsQ1vac8vIkBx9NgsU9l2bqqQojQhCAWyW7bajn7/RGy/N1kc+36rkAETzTnTLTrWXLWwptOVXPPp7FtcX2ixIiddM65Z+qob6VbDabQlteSvWDC8FbEEjQRUVuRYBFVI4oWJcGUJ1S54ZehP8UWUj8UvFRB2LG7FsUfxncQr9CkWqmWlq7DmzgkQfwd2A+CzwcYxG0OpFtB71eoIWXqVJYlHJl6lS4lHJp4NhzHZ5HQaO4515B+oGL4zMLjRIjSGRHzhuoyXCQlSM4AMwZSlPPT7K/BIZrY3ul9l5pE6QRw+PCiiHEgh7g1rmzAlEcGtcSQBIBpmKq5rfTNKTcP0f7Gaa/Ef/AM0efZVIoNMyKiNNVVWTO5YS2k0iqi2dM+Kl17+j/wAaLD/0+Dvya3NDHOAoEpRAMlwGhxDq66St9n6Y4VFM/wC3AEyZOeXSn9LWz2uXTg3LojF0Y1J7pLjtnk47Eom45VJAIFZpoGmixdt0c6JviAF8MukACwH5ZiVMV9QppyRM2Zl03Rj9OIODEvfGfGeZZgxgkZ0NpOfSuzhQGtqFVWeVgJqUqpbeWVpe0owrUa1l8/kU+BYglL4jqpSZDoaLC40u7Mm5XTWACQAAsCkhTKuK6I5duostfneRC5Re2amha2VKyO2XQjjNxeUYI0mNLjUAT6LmI2EOf+5xP27lcY/wiTQwZ6TcKtv2VEqU6q4SxBHoPZ0JeH4kur6fkCELPgWDGI8NE7ZZhnKwlk6MpKKyzo8QQcmCDL95JvzAWVT7VYy/Hs9UmNAEhVICjOBUGqXLs+nrK7FYWDzFs983L1Fslu2Wo2S3fzNPi6w2pDuvzdZZIwkhNCAXFOfrWI49Dqo2z3rLEcvZ6oA4o8tiOKM3U8UbJUXatqNkt38zQD49RrKDoYOblbrKfO7W9Eud+t6LEoqSw1kym10MJwYZibJ+OhR/01uz76FsbZ71+iSNs96yxV3o6X+H6m/iy9TX/wBLbsz/AItTGDDOTbLwWef49nqjZLdstWFo6V+H6jxZ+piGDjP2+3StaHieA0lzIMMPNJcGNmb3SmSt7ZLd/M0+d2t6KaFUIe6kaucmsZNZCzPZO/7jTYsKsJ5KzjgEIQsmAQhCAEnvABJoApKax4XgXxG5OUWzpkAKQtZPCN64qUkm8I5bC45e8uOeqwZgsK6RnR+H9TjoqE9OahbUDFUFtIYDoLpmZ0SNAvVPwpN5Z6D/AD6YRxHPBzeB4BEiftFH1Gr17F0+L8BbCbIUn+Ts56ti2h6XanqiqyW7+ZqWFaic/Uayd3HRBxRm6tqOOzT1kbJbttqOfv8ARSFQOKc/WtRxTn6/gjbPetsRtnvfiSAaEIQC2z3rAjl7b0+KPJajjlrIA4usKWyW7fpmjinzWonwfP4IA53a1yOd+tco5fGf/LVUuOWqgDbPeu0SRtnvWBHFHk8U+KPLagFy9t6B3S2WFPjjWS4p81qANkt2/TNHO7WuQOJ+fwSJ4z9uqgHzv1rkiJ2+a7RJDXT4/wCuqnxR5PFAYjD0UqC2eKPLalx2f+y23Gjga6As4aNAsn5rUwNG3z2LO4xsIMh6eVpsU+d9oRxz1VFz+BX/AI2LVvJulgltnvXaJI5X6otRxR5PFPijy6ywZFyu1b0bJbt+lHHPWRxT50AbJbtpRz91yOKfNYjjjVQBtnttCNs967RJBPAr/wAbFEO4HkQE0JSQgHslu2hHP3XpbJbttqOfv9EA+L7TasbjOgUz3r9ElJwsnPNp1vRIN7Z9mVYNEkA299uk/SbE+V2rcjlfq+qOV2r6oAPdLduT2S2WhLZLd/M0bJbttqAfP3Xo2+NpS5+/0RtnvW2IAn2z3r7lAU05qr9W5Mids8/1XfTJSHpfq+qABxZqixGyW7dejldq+qNkt38zQD4utFqXP3Xo2Sp6ttqOfv8ARAPbPbaUts969G2e9bYg9896yxAJzvx7bkmjs8tgsQ1v49t9qkKLJZ9GrbegDZLduvT4utFqWyW7+Zo53a1tyAOd+tejbPevRzv1vRG2e9+JIA2z22FHL23I2z3rLFF0/CfkI8UAiewCsjNYFIDslozXIA7JUXWWp7Jbv5mgGhErEIACEIQCTKEIAQEIQAEghCAEFCEAJoQgEUwhCAEIQgApFCEA0IQgEE0IQAgoQgApBCEAwgIQgMaEIQH/2Q=="
                  alt="Summer Collection"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                    <button className="mt-4 w-full bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category) => (
                <div key={category.id} className="relative overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                  </div>
                  <Link
                    href={/categories/${category.id}}
                    className="absolute inset-0"
                    aria-label={Shop ${category.name}}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}