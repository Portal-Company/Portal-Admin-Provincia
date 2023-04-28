import { Image } from "react-bootstrap";
import useFetch from "../../../../../hooks";

export const ImageView = ({ item }) => {
  const { data: Foto } = useFetch(`/file/${item?.logo}`);
  return (
    <>
      <Image
        className="rounded img-fluid w-25 me-3"
        src={Foto?.link}
        alt={item?.nome}
      />
    </>
  );
};
