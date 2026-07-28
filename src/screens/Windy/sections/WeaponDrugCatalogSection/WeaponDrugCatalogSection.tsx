import { useMemo, useState, useRef, useEffect } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import type { CatalogItem, ItemType } from "../../../../data/items";
import { catalogItems } from "../../../../data/items";

type FilterType = "ALL" | "WEAPONS" | "ATTACHMENTS" | "DRUGS";

const filterButtons: { value: FilterType; label: string }[] = [
  { value: "ALL", label: "All" },
  { value: "WEAPONS", label: "Weapons" },
  { value: "ATTACHMENTS", label: "Attachments" },
  { value: "DRUGS", label: "Drugs" },
];

const filterTypeMap: Record<FilterType, ItemType | null> = {
  ALL: null,
  WEAPONS: "weapon",
  ATTACHMENTS: "attachment",
  DRUGS: "drug",
};

const TIER_OPTIONS = ["All", "Tier 1", "Tier 1.5", "Tier 2", "Tier 3"];
const RARITY_OPTIONS = ["All", "Common", "Uncommon", "Rare", "Epic", "Legendary"];
const SOURCE_OPTIONS = ["All", "Faction", "Illegal Civilian"];

interface WeaponDrugCatalogSectionProps {
  onItemClick: (item: CatalogItem) => void;
}

export const WeaponDrugCatalogSection = ({
  onItemClick,
}: WeaponDrugCatalogSectionProps): JSX.Element => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterType>("ALL");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const [selectedTier, setSelectedTier] = useState("All");
  const [selectedRarity, setSelectedRarity] = useState("All");
  const [selectedSource, setSelectedSource] = useState("All");

  const [pendingTier, setPendingTier] = useState("All");
  const [pendingRarity, setPendingRarity] = useState("All");
  const [pendingSource, setPendingSource] = useState("All");

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setPendingTier(selectedTier);
      setPendingRarity(selectedRarity);
      setPendingSource(selectedSource);
    }
    setIsMenuOpen((prev) => !prev);
  };

  const handleApplyFilters = () => {
    setSelectedTier(pendingTier);
    setSelectedRarity(pendingRarity);
    setSelectedSource(pendingSource);
    setIsMenuOpen(false);
  };

  const handleResetFilters = () => {
    setPendingTier("All");
    setPendingRarity("All");
    setPendingSource("All");
    setSelectedTier("All");
    setSelectedRarity("All");
    setSelectedSource("All");
  };

  const activeBadgeCount = [
    selectedTier !== "All",
    selectedRarity !== "All",
    selectedSource !== "All",
  ].filter(Boolean).length;

  // --- PRECISE FILTERING LOGIC MATCHING YOUR DATASET ---
  const filtered = useMemo(() => {
    const typeFilter = filterTypeMap[activeFilter];

    return catalogItems.filter((item: any) => {
      // 1. Top Category Filter (Weapons, Attachments, Drugs)
      const matchesType = typeFilter === null || item.type === typeFilter;

      // 2. Search Filter
      const matchesSearch =
        search.trim() === "" ||
        item.name?.toLowerCase().includes(search.toLowerCase()) ||
        (item.tags && item.tags.some((t: string) => t.toLowerCase().includes(search.toLowerCase())));

      // 3. Tier Filter (Parses number from string like "Tier 1" -> 1)
      let matchesTier = true;
      if (selectedTier !== "All") {
        const numericTier = parseFloat(selectedTier.replace(/[^0-9.]/g, ""));
        if (!isNaN(numericTier)) {
          if (selectedTier.includes("+")) {
            matchesTier = item.tier >= numericTier;
          } else {
            matchesTier = item.tier === numericTier;
          }
        }
      }

      // 4. Rarity Filter
      let matchesRarity = true;
      if (selectedRarity !== "All") {
        matchesRarity = item.rarity?.toLowerCase() === selectedRarity.toLowerCase();
      }

      // 5. Source / Group Filter ("Faction", "Illegal Civilian", etc.)
      let matchesSource = true;
      if (selectedSource !== "All") {
        const itemGroup = item.group?.toLowerCase() || "";
        
        if (selectedSource === "Faction") {
          matchesSource = itemGroup === "faction" || itemGroup === "both";
        } else if (selectedSource === "Illegal Civilian") {
          matchesSource = 
            itemGroup === "illegal civilian" || 
            itemGroup === "civilian" || 
            itemGroup === "illegal" || 
            itemGroup === "both";
        } else {
          matchesSource = itemGroup === selectedSource.toLowerCase();
        }
      }

      return matchesType && matchesSearch && matchesTier && matchesRarity && matchesSource;
    });
  }, [search, activeFilter, selectedTier, selectedRarity, selectedSource]);

  const getFallbackIcon = (type: ItemType) => {
    switch (type) {
      case "drug": return "💊";
      case "attachment": return "🔧";
      case "weapon": return "🔫";
      default: return "📦";
    }
  };

  return (
    <section
      id="weapon-catalog"
      className="flex w-full scroll-mt-6 flex-col items-start gap-7 px-8 py-0 pb-12"
    >
      <header className="flex w-full max-w-[700px] flex-col items-start gap-3">
        <p className="flex items-center [font-family:'Inter',Helvetica] text-xs font-bold tracking-[0.96px] text-[#b8c7d9]">
          All items + descriptions
        </p>
        <h2 className="flex items-center [font-family:'Inter',Helvetica] text-[44px] font-black leading-[46.2px] tracking-[-1.76px] text-[#f5f7fa] max-sm:text-3xl max-sm:leading-tight">
          Arsenal &amp; Supply Catalog
        </h2>
        <p className="[font-family:'Inter',Helvetica] text-[15px] font-normal leading-[25.5px] tracking-[0] text-[#9aa6b2]">
          A full browse area so players can see every weapon, attachment, and drug
          reward, what it is good for, and which route or playstyle it fits best.
        </p>
      </header>

      <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {filterButtons.map(({ value, label }) => (
            <Button
              key={value}
              type="button"
              variant="ghost"
              onClick={() => setActiveFilter(value)}
              className={`h-auto rounded-xl px-4 py-2 transition-all duration-150 hover:bg-transparent ${
                activeFilter === value
                  ? "bg-[#b8c7d9] text-[#07090c] hover:bg-[#b8c7d9]"
                  : "border border-[#161b22] bg-[#0a0d12] text-[#9aa6b2] hover:text-[#f5f7fa]"
              }`}
            >
              <span className="[font-family:'Inter',Helvetica] text-[13px] font-bold">
                {label}
              </span>
            </Button>
          ))}
        </div>

        {/* Right Side Controls */}
        <div className="relative flex items-center gap-3 w-full sm:w-auto" ref={menuRef}>
          <Button
            type="button"
            variant="ghost"
            onClick={toggleMenu}
            className={`flex h-10 items-center gap-2 rounded-xl border border-[#161b22] px-3.5 transition-all ${
              isMenuOpen || activeBadgeCount > 0
                ? "bg-[#121820] text-[#f5f7fa] border-[#b8c7d9]/40"
                : "bg-[#0a0d12] text-[#9aa6b2] hover:bg-[#11161d] hover:text-[#f5f7fa]"
            }`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            <span className="[font-family:'Inter',Helvetica] text-[13px] font-bold">
              Filter
            </span>
            {activeBadgeCount > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1d6bf3] text-[11px] font-bold text-white">
                {activeBadgeCount}
              </span>
            )}
          </Button>

          {/* Filter Popover */}
          {isMenuOpen && (
            <div className="absolute right-0 top-12 z-50 w-[420px] rounded-2xl border border-[#1d242e] bg-[#0c0f14] p-5 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-4">
                <h3 className="[font-family:'Inter',Helvetica] text-sm font-bold text-[#f5f7fa]">
                  Filter Items
                </h3>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="text-xs font-normal text-[#9aa6b2] hover:text-[#f5f7fa] transition-colors"
                >
                  Reset all
                </button>
              </div>

              <div className="flex flex-col gap-5">
                {/* Tier Selection */}
                <div>
                  <span className="mb-2 block text-xs font-semibold text-[#8b98a5]">
                    Tier
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {TIER_OPTIONS.map((tier) => (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => setPendingTier(tier)}
                        className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                          pendingTier === tier
                            ? "bg-[#e2e8f0] text-[#090d12]"
                            : "bg-[#141922] text-[#8b98a5] hover:bg-[#1c2330] hover:text-[#f5f7fa]"
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Rarity Selection */}
                <div>
                  <span className="mb-2 block text-xs font-semibold text-[#8b98a5]">
                    Rarity
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {RARITY_OPTIONS.map((rarity) => (
                      <button
                        key={rarity}
                        type="button"
                        onClick={() => setPendingRarity(rarity)}
                        className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                          pendingRarity === rarity
                            ? "bg-[#e2e8f0] text-[#090d12]"
                            : "bg-[#141922] text-[#8b98a5] hover:bg-[#1c2330] hover:text-[#f5f7fa]"
                        }`}
                      >
                        {rarity}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Source Selection */}
                <div>
                  <span className="mb-2 block text-xs font-semibold text-[#8b98a5]">
                    Source
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {SOURCE_OPTIONS.map((source) => (
                      <button
                        key={source}
                        type="button"
                        onClick={() => setPendingSource(source)}
                        className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all ${
                          pendingSource === source
                            ? "bg-[#e2e8f0] text-[#090d12]"
                            : "bg-[#141922] text-[#8b98a5] hover:bg-[#1c2330] hover:text-[#f5f7fa]"
                        }`}
                      >
                        {source}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <Button
                  type="button"
                  onClick={handleApplyFilters}
                  className="mt-2 h-11 w-full rounded-xl bg-[#c5d3e2] text-xs font-bold text-[#090d12] hover:bg-[#e2e8f0] transition-colors"
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          )}

          {/* Search Box */}
          <div className="relative w-full max-w-xs">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9aa6b2]"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.3" />
              <path
                d="M10 10L13 13"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Search arsenal..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-10 w-full rounded-xl border border-[#161b22] bg-[#0a0d12] pl-9 pr-3 [font-family:'Inter',Helvetica] text-[13px] text-[#f5f7fa] placeholder-[#9aa6b2] outline-none focus:border-[#b8c7d9]/40"
            />
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="[font-family:'Inter',Helvetica] text-sm text-[#9aa6b2]">
          No items match your search or filter options.
        </p>
      ) : (
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {filtered.map((item) => (
            <Card
              key={item.id}
              onClick={() => onItemClick(item)}
              className="h-auto cursor-pointer rounded-lg border border-solid border-[#161b22] bg-[#080b10] shadow-none transition-all duration-150 hover:border-[#b8c7d9]/40 hover:shadow-[0_0_16px_rgba(184,199,217,0.07)]"
            >
              <CardContent className="flex h-full flex-col p-[17px]">
                <div className="flex h-[120px] items-center justify-center rounded-md border border-solid border-[#161b22] bg-[#0e0e0e] p-3.5">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="text-4xl opacity-50">
                      {getFallbackIcon(item.type)}
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <h3 className="pt-px [font-family:'Inter',Helvetica] text-lg font-normal leading-[20.7px] tracking-[-0.36px] text-[#f5f7fa]">
                    {item.name}
                  </h3>
                  <Badge className="h-7 shrink-0 rounded-xl border border-solid border-[#161b22] bg-[#0a0d12] px-2.5 py-1.5 [font-family:'Inter',Helvetica] text-[11px] font-bold leading-[normal] tracking-[0] text-[#b8c7d9] hover:bg-[#0a0d12]">
                    {item.rarity}
                  </Badge>
                </div>
                <p className="mt-3 [font-family:'Inter',Helvetica] text-sm font-normal leading-[22.4px] tracking-[0] text-[#9aa6b2] line-clamp-3">
                  {item.description}
                </p>
                <div className="mt-auto flex flex-wrap items-start gap-2 pt-5">
                  {item.tags?.map((tag: string) => (
                    <Badge
                      key={`${item.id}-${tag}`}
                      className="rounded-xl border border-solid border-[#161b22] bg-[#0a0d12] px-2.5 py-2 [font-family:'Inter',Helvetica] text-xs font-bold leading-[normal] tracking-[0] text-[#f5f7fa] hover:bg-[#0a0d12]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
};
