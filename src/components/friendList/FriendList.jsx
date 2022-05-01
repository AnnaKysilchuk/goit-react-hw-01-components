export const Friends = ({ data }) => {
  const renderList = () =>
    data.map(({ avatar, name, isOnline, id }) => (
      <li className="item" key={id}>
        <span className="status" isOnline={isOnline}>{isOnline}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
      </li>
    ));

  return <ul className="friend-list">{data && renderList()}</ul>;
};