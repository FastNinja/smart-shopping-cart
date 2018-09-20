# Smart Shopping Cart

## Getting Started

- Clone the repository
- Run `npm install` to install dependencies
- Run `npm run test` to execute Specifications and see the result
- Run `npm run test-with-coverage` to run tests and see coverage

### Configure Different discounts

- `Customer-Deals-Repository` holds Customer and special deals configuration (in future - read from storage, external service, S3 bucket, etc..)

### Configure Products

- `CatalogRepository` holds Products and their pricing (read from storage DB, external service etc...)

### Acceptance tests

- Acceptance test are executing certain sccenarios `npm run test-acceptance-only`

## Decision Log

- Typescript/Flow is omitted on purpose. If product evolves into more complex service introductuon of Type system might help.

- Certain entities are not strongly modeled - Customer and Product. At this stage they do not hold any behavior nor do they hold any meaningful attributes. Introduction of Types (see above) might reverse this decision

- Library does not include CLI or API. Verification is done by test suit.
