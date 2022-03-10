import { useLocation } from "react-router-dom";

const Contact = () => {
  const queryString = useLocation().search;

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");
  console.log(name);

  return (
    <div>
      <h2>Hey {name}, Contact us here</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem vel ut
        nam molestiae molestias minima, aut natus, ullam assumenda sapiente
        tempora voluptas, sint explicabo magnam quod incidunt placeat! Id, ab!
      </p>
    </div>
  );
};

export default Contact;
