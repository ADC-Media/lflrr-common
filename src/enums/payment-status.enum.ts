/**
 * Represents the possible states of a payment.
 *
 * @remarks
 * Currently, the only available status is `Success` because all payments are
 * approved by default when the payment data is created manually. This is a
 * temporary state until payment gateway integration is implemented, at which point
 * more status options will be added to reflect the different payment outcomes.
 */
export enum PaymentStatus {
  Success = "success",
}
