import createError from "http-errors";
import { validate, ValidationError } from "class-validator";

export class BaseDto {
  async isValid(): Promise<boolean> {
    const errors = await validate(this);

    if (errors.length > 0) {
      const badRequest = new createError.BadRequest();
      throw createError(badRequest.statusCode, badRequest.name, {
        errors: errors.map((e) => ({
          property: e.property,
          constrainst: this.getContrainsts(e),
        })),
      });
    }
    return true;
  }
  private getContrainsts(error: ValidationError): Array<string> {
    if (error?.children?.length) {
      return this.getContrainsts(error.children[0]);
    }
    return Object.values(error.constraints ?? {});
  }
}
