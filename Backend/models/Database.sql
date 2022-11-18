create DATABASE company;

create Table Product
(
     title varchar(255) not null unique,
     descriptio varchar(255),
     img varchar(255) not null,
     size varchar(255),
     color varchar(255),
     price INT
);

/*


title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
    */