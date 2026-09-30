import {
  HeartHandshake,
  House,
  PawPrint,
  Stethoscope,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

const nodes: { Icon: LucideIcon; position: string }[] = [
  {
    Icon: UsersRound,
    position: "left-[12%] top-[10%]",
  },
  {
    Icon: PawPrint,
    position: "right-[13%] top-[8%]",
  },
  {
    Icon: Stethoscope,
    position: "left-[5%] top-[52%]",
  },
  {
    Icon: HeartHandshake,
    position: "right-[6%] top-[48%]",
  },
  {
    Icon: House,
    position: "left-[25%] bottom-[5%]",
  },
  {
    Icon: PawPrint,
    position: "right-[29%] bottom-[2%]",
  },
];

export function UserNetworkBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {nodes.map(({ Icon, position }, index) => (
        <span
          key={`${position}-${index}`}
          className={`absolute grid h-10 w-10 place-items-center rounded-full border border-white/70 bg-primary text-primary-foreground shadow-md sm:h-12 sm:w-12 ${position}`}
        >
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.7} />
        </span>
      ))}
    </div>
  );
}
