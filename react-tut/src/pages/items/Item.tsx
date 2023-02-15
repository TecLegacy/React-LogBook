import { useParams } from 'react-router-dom';

type Props = {};

const Item = (props: Props) => {
  // const activePage = param.itemId?.replaceAll(/ /g, '');
  const param = useParams();
  // console.log(param.itemId);
  const [page, pageId] = param.itemId?.split(' ') || [];
  const activePage = page.replaceAll(/:/g, '');
  // console.log(page, 'page Id', pageId);
  console.log(activePage, 'pages', pageId);
  return (
    <>
      <div>
        <h1>{activePage}</h1>
      </div>
    </>
  );
};

export default Item;
