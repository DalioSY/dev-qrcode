interface Props {
  params: { nikname: string };
}

export default function ProfilesDet({ params }: Props) {
  return (
    <>
      <h1>Perfil:{params.nikname} </h1>
    </>
  );
}
