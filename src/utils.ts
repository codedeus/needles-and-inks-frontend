/** Utility function to format a date in a human-readable format
 *
 * Example: formatDate("2023-02-10") => "Feb 10, 2023"
 */
export const formatDate = (date: Date | string): string => {
  const d = new Date(date)
  return d.toLocaleString("en-US", { dateStyle: "medium" })
}
