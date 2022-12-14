import { Form } from "react-router-dom";

export default function Contact() {
  const contact = {
    first_name: "Michael",
    last_name: "Zura",
    address: "34 Applewood Dr",
    city: "Dover",
    state: "DE",
    zipcode: "19901",
    phone: "618-979-3422",
    email: "michaelzura@bellsouth.net",
    note: "My first address.",
    favorite: true,
  };

  return (
    <div id="contact">
      <div>
        <h1>
          {contact.first_name || contact.last_name ? (
            <>
              {contact.first_name} {contact.last_name}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>
        {contact.address && <p>{contact.address}</p>}
        {contact.city && <p>{contact.city}</p>}
        {contact.state && <p>{contact.state}</p>}
        {contact.zipcode && <p>{contact.zipcode}</p>}
        {contact.phone && <p>{contact.phone}</p>}
        {contact.email && <p>{contact.email}</p>}
        {contact.note && <p>{contact.note}</p>}
        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}
