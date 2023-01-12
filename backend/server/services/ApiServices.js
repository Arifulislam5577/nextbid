class ApiService {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.searchBy
      ? {
          name: {
            $regex: this.queryStr.searchBy,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };
    const removeFields = ["keyword", "limit", "page"];
    removeFields.forEach((el) => delete queryCopy[el]);
    let queryString = JSON.stringify(queryCopy);

    queryString = queryString.replace(
      /\b(gt|gte|lt|lte)\b/g,
      (match) => `$${match}`
    );
    this.query = this.query.find(JSON.parse(queryString));
    return this;
  }

  paginate() {
    const resultPerPage = this.queryStr.limit * 1 || 6;
    const currentPage = this.queryStr.page * 1 || 1;
    const skip = resultPerPage * (currentPage - 1);
    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }

  sort() {
    const sortedBy = this.queryStr.sort;
    this.query = this.query.sort(sortedBy);
    return this;
  }
}

export default ApiService;
