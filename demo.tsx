import { GlowCard } from "@/components/ui/spotlight-card";

export function Default(){
  return(
    <div className="w-screen h-screen flex flex-row items-center justify-center gap-10 custom-cursor bg-black">
      <GlowCard>
        <div className="flex flex-col gap-2">
            <h3 className="text-white font-bold text-xl">Card 1</h3>
            <p className="text-gray-400">This is a spotlight card with a blue glow.</p>
        </div>
      </GlowCard>
      <GlowCard glowColor="purple">
         <div className="flex flex-col gap-2">
            <h3 className="text-white font-bold text-xl">Card 2</h3>
            <p className="text-gray-400">This card has a purple glow effect.</p>
        </div>
      </GlowCard>
      <GlowCard glowColor="green">
         <div className="flex flex-col gap-2">
            <h3 className="text-white font-bold text-xl">Card 3</h3>
            <p className="text-gray-400">This card features a green spotlight glow.</p>
        </div>
      </GlowCard>
    </div>
  );
};
