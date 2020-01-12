import React from "react";
import Link from "next/link";

const products = [
  {
    image: "/images/product/4.png",
    title: "Heart Gummy Vitamin",
    description:
      "For medium to dry skin for the lorem ipsum is the best texhnique to clense your skin.",
    price: "$32.00",
    link: "/product"
  },
  {
    image: "/images/product/5.png",
    title: "Heart Gummy Vitamin",
    description:
      "For medium to dry skin for the lorem ipsum is the best texhnique to clense your skin.",
    price: "$32.00",
    link: "/product"
  },
  {
    image: "/images/product/6.png",
    title: "Heart Gummy Vitamin",
    description:
      "For medium to dry skin for the lorem ipsum is the best texhnique to clense your skin.",
    price: "$32.00",
    link: "/product"
  },
  {
    image: "/images/product/7.png",
    title: "Heart Gummy Vitamin",
    description:
      "For medium to dry skin for the lorem ipsum is the best texhnique to clense your skin.",
    price: "$32.00",
    link: "/product"
  },
  {
    image: "/images/product/4.png",
    title: "Heart Gummy Vitamin",
    description:
      "For medium to dry skin for the lorem ipsum is the best texhnique to clense your skin.",
    price: "$32.00",
    link: "/product"
  },
  {
    image: "/images/product/5.png",
    title: "Heart Gummy Vitamin",
    description:
      "For medium to dry skin for the lorem ipsum is the best texhnique to clense your skin.",
    price: "$32.00",
    link: "/product"
  },
  {
    image: "/images/product/6.png",
    title: "Heart Gummy Vitamin",
    description:
      "For medium to dry skin for the lorem ipsum is the best texhnique to clense your skin.",
    price: "$32.00",
    link: "/product"
  }
];

export default function Collections() {
  return (
    <div className="py-5 my-5">
      <div className="custom-container py-4">
        <div className="row">
          {/* Sidebar */}
          <div className="col-2 d-none d-lg-block">
            <div className="mb-5">
              <p className="font-size-title font-weight-medium mb-3">
                Skin Products
              </p>
              {[
                { name: "Men", count: "11" },
                { name: "Women", count: "2" }
              ].map(item => (
                <div className="d-flex">
                  <p className="mb-2 position-relative cursor-pointer">
                    {item.name}
                    <span
                      className="position-absolute font-size-tiny text-right"
                      style={{ right: "-12px", top: "-4px" }}
                    >
                      {item.count}
                    </span>
                  </p>
                </div>
              ))}
            </div>
            <p className="font-size-title font-weight-medium mb-3">
              Hair Products
            </p>
            {[
              { name: "Men", count: "11" },
              { name: "Women", count: "2" }
            ].map(item => (
              <div className="d-flex">
                <p className="mb-2 position-relative cursor-pointer">
                  {item.name}
                  <span
                    className="position-absolute font-size-tiny text-right"
                    style={{ right: "-12px", top: "-4px" }}
                  >
                    {item.count}
                  </span>
                </p>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="col-12 col-lg-10">
            {/* Skin Products for men */}
            <p className="font-size-title font-weight-medium mb-4">
              Skin Products for men
            </p>
            <div className="row mb-5">
              {products.map(item => (
                <div className="col-6 col-sm-4 col-md-3">
                  <Link href={item.link}>
                    <a className="mb-5 d-block font-color-black cursor-pointer">
                      <div
                        className="mb-3"
                        style={{
                          paddingBottom: "125%",
                          background: `url("${item.image}") center center/cover`
                        }}
                      />
                      <p className="font-size-subheader mb-2 font-weight-medium">
                        {item.title}
                      </p>
                      <p className="mb-2 font-color-medium">
                        {item.description}
                      </p>
                      <p className="font-size-subheader font-weight-medium pb-2 borderbottom border-color-black">
                        {item.price}
                      </p>
                    </a>
                  </Link>
                </div>
              ))}
            </div>

            {/* Skin Products for womenn */}
            <p className="font-size-title font-weight-medium mb-4">
              Skin Products for women
            </p>
            <div className="row mb-5">
              {products.map(item => (
                <div className="col-6 col-sm-4 col-md-3">
                  <Link href={item.link}>
                    <a className="mb-5 d-block font-color-black cursor-pointer">
                      <div
                        className="mb-3"
                        style={{
                          paddingBottom: "125%",
                          background: `url("${item.image}") center center/cover`
                        }}
                      />
                      <p className="font-size-subheader mb-2 font-weight-medium">
                        {item.title}
                      </p>
                      <p className="mb-2 font-color-medium">
                        {item.description}
                      </p>
                      <p className="font-size-subheader font-weight-medium pb-2 borderbottom border-color-black">
                        {item.price}
                      </p>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}