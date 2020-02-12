import { Injectable } from "@angular/core";

import { ToastrService } from "ngx-toastr";
@Injectable({
    providedIn: 'root'
})

export class HelperService {
    constructor(public toasterService: ToastrService) {

    }

    showSuccess(message) {
        return this.toasterService.success(message, 'Success');
    }

    showError(message) {
        return this.toasterService.error(message, "Error");
    }
}