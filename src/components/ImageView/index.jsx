import { Image } from "react-bootstrap";
import useFetch from "../../hooks";

export const ImageView = ({ item, type }) => {
  const { data: Foto } =
    type === "fotoUrl"
      ? useFetch(`/file/${item?.fotoUrl}`)
      : useFetch(`/file/${item?.logo}`);
  return (
    <>
      <Image
        style={{ width: "15%", cursor: "pointer" }}
        className="rounded img-fluid me-3"
        onClick={() => (window.location.href = `${Foto?.link}`)}
        src={Foto?.link}
        alt={item?.nome}
      />
    </>
  );
};
