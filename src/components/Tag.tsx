type TagProps = {
  tag: string;
};

const Tag: React.FC<TagProps> = ({ tag }) => {
  return (
    <div className="tag">
      <span> {tag} </span>
    </div>
  );
};

export default Tag;