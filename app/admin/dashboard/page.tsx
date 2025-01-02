import { Cart } from "@/components/Cart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, TrendingUpIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-[27px]">Dashboard</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]">
        <Card className="min-w-[262px]">
          <CardHeader className="flex flex-row justify-between items-start">
            <div>
              <CardTitle className="mb-4 font-semibold capitalize text-base text-[#202224]">
                Total User
              </CardTitle>
              <p className="text-3xl font-bold">40,190</p>
            </div>
            <div className="size-[60px] relative flex bg-[#8280FF]/20 rounded-3xl items-center justify-center">
              <Image
                src="/assets/images/profile.png"
                alt="Source"
                width={30}
                height={30}
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <TrendingUpIcon color="#00B69B" />
              <p className="font-semibold text-[#606060]">
                <span className="text-[#00B69B]">8.5%</span> Up from yesterday
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="min-w-[262px]">
          <CardHeader className="flex flex-row justify-between items-start">
            <div>
              <CardTitle className="mb-4 font-semibold capitalize text-base text-[#202224]">
                Total Order
              </CardTitle>
              <p className="text-3xl font-bold">102903</p>
            </div>
            <div className="flex relative size-[60px] px-[14px] py-[18px] bg-[#FEC53D]/20 rounded-3xl items-center">
              <Image
                src="/assets/images/box.png"
                alt="Source"
                width={30}
                height={30}
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <TrendingDown color="#F93C65" />
              <p className="font-semibold text-[#606060]">
                <span className="text-[#F93C65]">3.5%</span> Up from yesterday
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="min-w-[262px]">
          <CardHeader className="flex flex-row justify-between items-start">
            <div>
              <CardTitle className="mb-4 font-semibold capitalize text-base text-[#202224]">
                Total Sales
              </CardTitle>
              <p className="text-3xl font-bold">$89,000</p>
            </div>
            <div className="flex relative size-[60px] px-[14px] py-[18px] bg-[#4AD991]/20 rounded-3xl items-center">
              <Image
                src="/assets/images/grafik.png"
                alt="Source"
                width={30}
                height={30}
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <TrendingUpIcon color="#00B69B" />
              <p className="font-semibold text-[#606060]">
                <span className="text-[#00B69B]">8.5%</span> Up from yesterday
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="min-w-[262px]">
          <CardHeader className="flex flex-row justify-between items-start">
            <div>
              <CardTitle className="mb-4 font-semibold capitalize text-base text-[#202224]">
                Total Pending
              </CardTitle>
              <p className="text-3xl font-bold">40,190</p>
            </div>
            <div className="flex relative size-[60px] px-[14px] py-[18px] bg-[#FF9066]/20 rounded-3xl items-center">
              <Image
                src="/assets/images/time.png"
                alt="Source"
                width={30}
                height={30}
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <TrendingUpIcon color="#00B69B" />
              <p className="font-semibold text-[#606060]">
                <span className="text-[#00B69B]">3.5%</span> Up from yesterday
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-[30px]">
        <Card>
          <CardHeader className="font-bold text-2xl">Sales Details</CardHeader>
          <CardContent>
            <Cart />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
