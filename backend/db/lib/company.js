"use strict";

function setupCompany(companyModel) {
  async function createCompany(company) {
    const result = await companyModel.create(company);
    return result.toJSON();
  }
  async function deletCompany(uuid) {
    const cond = { where: { uuid } };
    const result = await companyModel.destroy(cond);
    return !!result;
  }
  function findAllCompany() {
    return companyModel.findAll();
  }
  function findCompanyUuid(uuid) {
    const cond = { where: { uuid } };
    return companyModel.findOne(cond);
  }

  return {
    createCompany,
    deletCompany,
    findAllCompany,
    findCompanyUuid
  };
}

module.exports = setupCompany;
