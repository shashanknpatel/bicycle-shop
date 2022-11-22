export default function Size() {
    return(
        <div className="pt-2 space-x-1">
            <label onClick={SM} className="uppercase border-2 border-black p-2 hover:bg-cyan-500">sm</label>
            <label className="uppercase border-2 border-black p-2 hover:bg-cyan-500">md</label>
            <label className="uppercase border-2 border-black p-2 hover:bg-cyan-500">lg</label>
            <label className="uppercase border-2 border-black p-2 hover:bg-cyan-500">xl</label>
        </div>
    );
}