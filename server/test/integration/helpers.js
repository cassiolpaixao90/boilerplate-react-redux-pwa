import supertest         from "supertest";
import chai              from "chai";
import app               from "../../app";

global.app           = app;
global.supertest     = supertest(app);
global.expect        = chai.expect;