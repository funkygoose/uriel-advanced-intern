import { Skeleton } from "@mui/material";

export default function ForYouHome() {
    return (
        
       new Array(6).fill(0).map((_, index) => (
                  <div className="item" key={index}>
                    <div className="nft_coll">
                      <div className="nft_wrap">
                        <Skeleton width={368} height={150} borderRadius={1} />
                      </div>
                      <div className="nft_coll_pp">
                        <div className="lazy pp-coll">
                          <Skeleton width={60} height={60} borderRadius={999} />
                        </div>

                        <i className="fa fa-check"></i>
                      </div>
                      <div className="nft_coll_info">
                        <h4>
                          <Skeleton width={120} height={20} borderRadius={1} />
                        </h4>

                        <span>
                          <Skeleton width={90} height={20} borderRadius={1} />
                        </span>
                      </div>
                    </div>
                  </div>
    )))
}