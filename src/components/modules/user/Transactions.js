"use client";
import api from "config/api";
import React, { useEffect, useState } from "react";

async function userTransactions() {
  try {
    const res = await api.get("/user/transactions");
    return res;
  } catch (error) {
    console.error("خطا در دریافت تورها:", error);
    return [];
  }
}

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function transactions() {
      const data = await userTransactions();
      setTransactions(data);
    }
    transactions();
  }, []);
  return (
    <div>
      {transactions.length > 0 ? (
        <div className="overflow-hidden rounded-[10px] border border-black/25">
          <table className="table-auto w-full rounded-[10px] border-[1px] border-black/25">
            <thead className="text-mute">
              <tr className="bg-[#DBDBDB] text-xs rounded-t-[10px] font-normal md:text-base">
                <th className="py-2 pr-4 md:text-start">تاریخ و ساعت</th>
                <th className="py-2 md:text-start">مبلغ(تومان)</th>
                <th className="hidden py-2 md:text-start md:table-cell">
                  نوع تراکنش
                </th>
                <th className="py-2 md:text-start">شماره سفارش</th>
              </tr>
            </thead>
            <tbody className=" font-vazir">
              {transactions.map((tra, index) => (
                <tr key={index} className="overflow-auto text-sm">
                  <td className="text-center py-2 pr-4 pt-4 md:text-start">
                    {new Date(tra.createdAt).toLocaleTimeString("fa-IR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}{" "}
                    - {new Date(tra.createdAt).toLocaleDateString("fa-IR")}
                  </td>

                  <td className="text-center pt-4 md:text-start">
                    {tra.amount ? tra.amount : "_"}
                  </td>
                  <td className="hidden text-center pt-4 md:text-start md:table-cell">
                    {tra.type ? "ثبت نام در تور گردشگری" : "_"}
                  </td>
                  <td className="max-w-[20px] pt-4 truncate text-center md:text-start">
                    {tra.id
                      ? `${tra.id.slice(0, 8)}...${tra.id.slice(-6)}`
                      : "_"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <div className="min-h-screen flex flex-col gap-4 md:rounded-[10px] md:border-[1px] md:border-black/20 p-4">
            <h1 className="font-bold text-center lg:my-auto">
              در حال حاضر هیچ تراکنشی موجود نیست.
            </h1>
          </div>
        </>
      )}
    </div>
  );
}

export default Transactions;
