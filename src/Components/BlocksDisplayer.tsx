import {
  BlockType,
  EditorBlock,
  HeaderBlock,
  ListBlock,
  ParagraphBlock
} from "../Types";

type BlocksDisplayerProps = {
  blocks: EditorBlock[];
};

function ParagraphBlockDisplay({ data }: ParagraphBlock) {
  return <p>{data.text}</p>;
}

function ListBlockDisplay({ data }: ListBlock) {
  const items = data.items.map((item) => <li>{item}</li>);
  if (data.style === "ordered") {
    return <ul>{items}</ul>;
  }
  return <ol>{items}</ol>;
}

function HeaderBlockDisplay({ data }: HeaderBlock) {
  switch (data.level) {
    case 1:
      return <h2 className="text-5xl font-bold pt-6">{data.text}</h2>;
    case 2:
      return <h3 className="text-3xl font-bold pt-4">{data.text}</h3>;
    case 3:
      return <h4 className="text-xl font-bold pt-2">{data.text}</h4>;
    case 4:
      return <h5 className="text-lg font-bold pt-1">{data.text}</h5>;
    case 5:
      return <h6 className="text-base font-bold">{data.text}</h6>;
    default:
      return null;
  }
}

function getBlockDisplay(block: EditorBlock, key: string) {
  switch (block.type) {
    case BlockType.paragraph:
      return <ParagraphBlockDisplay key={key} {...block} />;
    case BlockType.list:
      return <ListBlockDisplay key={key} {...block} />;
    case BlockType.header:
      return <HeaderBlockDisplay key={key} {...block} />;
    default:
      return null;
  }
}

export function BlockDisplayer({ blocks }: BlocksDisplayerProps) {
  return (
    <div className="grid grid-flow-row gap-4">
      {blocks.map((block) => {
        return getBlockDisplay(block, block.id);
      })}
    </div>
  );
}
