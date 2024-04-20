type TagProps = {
  tags: string;
};

const Tag: React.FC<TagProps> = ({ tags }) => {
  return (
    <div className="tag">
      <span> {tags} </span>
    </div>
  );
};

export default Tag;
