

export const QrComponent = () => {
    return (
        <div className="bg-light-gray w-screen h-screen flex flex-col justify-center items-center ">
            <div className="md:w-[375px] w-[90%] h-[600px] p-4 rounded-xl bg-white shadow-xl">
                <img className="rounded-xl"  src={`${process.env.PUBLIC_URL}/image-qr-code.png`} alt="qr code" width="100%" />
                <div className="py-5 text-center">
                    <p className="text-dark-blue font-bold font-outfit text-[28px] pb-1">Improve your front-end skills by building proyects</p>
                    <p className="text-grayish-blue font-outfit text-[18px] p-1">Scan the QR code to visit Frontend Mentor and take your coding skills to the netx level</p>
                </div>
            </div>

        </div>
    )
}
