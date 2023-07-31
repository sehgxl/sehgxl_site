const Mac = ({ imageLink }: { imageLink: string }) => {
  return (
    <section className="relative h-[26rem] w-[47rem] scale-[0.5] 545px:scale-[0.9] 877px:scale-[0.8] 1155px:scale-[0.9] 1341px:scale-[1]">
      <img
        src="/macmock.png"
        className="transiton duration-190 pointer-events-none absolute  z-10  scale-[0.8] ease-out 545px:scale-[0.7] 877px:scale-[0.8] 1155px:scale-[0.9] 1341px:scale-[1]  "
        alt=""
      />

      <div
        className="transiton duration-190 absolute left-0  right-0 
top-[1.8rem] mx-auto h-[21.4rem] w-[35rem]  scale-[0.8] ease-out 545px:scale-[0.7] 877px:scale-[0.8] 1155px:scale-[0.9] 1341px:scale-[1] "
      >
        <img src={imageLink} className=" h-full w-full object-cover " alt="" />
      </div>
    </section>
  )
}

export default Mac
