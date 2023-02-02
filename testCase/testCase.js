const server = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);

describe("Category API", () => {
  describe("Category Create API", () => {
    it("if error", (done) => {
      const data = {
        categoryName: "mobile",
      };
      chai
        .request(server)
        .post("/category/cateCreat")
        .send(data)
        .end((err, res) => {
          res.should.have.status(500);
          res.should.be.a("object");
          res.body.should.have.property("status").eq("Failed");
          done();
        });
      it("if data provided return success created message ", (done) => {
        const data = {
          categoryName: "Mobile",
        };
        chai
          .request(server)
          .post("/category/cateCreate")
          .send(data)
          .end((err, res) => {
            res.should.have.status(201);
            res.should.be.a("object");
            res.body.should.have.property("status").eq("success");
            res.body.should.have.property("message").eq("Add Category Success");
            done();
          });
      });
    });
  });

  describe("Product Create API", () => {
    it("if error", (done) => {
      const data = {
        productName: "redmi note 8pro",
        qtyPerUnit: "OSM",
        unitPrice: "9000",
        unitInStock: "only two",
        discontinued: "no",
        categoryId: "63da3da476179f80a9aab309",
      };
      chai
        .request(server)
        .post("/product/prodCreate")
        .send(data)
        .end((err, res) => {
          res.should.have.status(500);
          res.should.be.a("object");
          res.body.should.have.property("status").eq("Failed");
          done();
        });
      it("if data provided return success created message ", (done) => {
        const data = {
          productName: "redmi note 8pro",
          qtyPerUnit: "OSM",
          unitPrice: "9000",
          unitInStock: "only two",
          discontinued: "no",
          categoryId: "63da3da476179f80a9aab309",
        };
        chai
          .request(server)
          .post("/product/prodCreate")
          .send(data)
          .end((err, res) => {
            res.should.have.status(201);
            res.should.be.a("object");
            res.body.should.have.property("status").eq("success");
            res.body.should.have
              .property("message")
              .eq("created product Success");
            done();
          });
      });
    });
  });
});
