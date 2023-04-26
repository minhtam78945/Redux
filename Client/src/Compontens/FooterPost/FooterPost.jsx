function FooterPost(props) {
  const { setOpenPost, isOpenPost } = props;
  return (
    <footer
      onClick={() => setOpenPost(!isOpenPost)}
      className="bg-white fixed justify-center text-black cursor-pointer hover:opacity-20 flex items-center bottom-0  h-[30px] w-[100%]"
    >
      <div className="footer-title text-lg uppercase">
        {isOpenPost ? <>X</> : <>+ Create the post</>}
      </div>
    </footer>
  );
}

export default FooterPost;
